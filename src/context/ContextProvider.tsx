import {
  useState,
  useEffect,
  ReactNode,
  useContext,
  createContext,
  Dispatch,
  SetStateAction
} from 'react';
// --- Plugins
import { getColorName } from '@/hooks/UseColor';

type SchemeStyle = 'style-1' | 'style-2';

interface ColorList {
  name: string;
  color: string
}

interface IContextInterface {
  color: ColorList[],
  setColor: Dispatch<SetStateAction<ColorList[]>>,
  style: SchemeStyle,
  setStyle: Dispatch<SetStateAction<SchemeStyle>>,
  changeColor: Function,
  addNewColor: Function,
  changeStyle: Function,
  deleteColor: Function
};

interface IContextProvider {
  children: ReactNode
};

const defaultData: ColorList[] = [
  {
    name: getColorName('#768088'),
    color: '#768088'
  }
]

const Context = createContext<IContextInterface | null>(null);

export function ContextProvider({
  children
}: IContextProvider) {
  const [style, setStyle] = useState<SchemeStyle>('style-1');
  const [color, setColor] = useState<ColorList[]>([]);

  const isLocalStorageEmpty = (): boolean => {
    return !localStorage.getItem('color-scheme');
  }

  const deleteColor = (index: number): void => {
    let newValue = [...color];

    if (index !== -1) {
      newValue.splice(index, 1);

      setColor(newValue);
      localStorage.setItem('color-scheme', JSON.stringify(newValue));
    }
  }

  const changeColor = (oldColor: string, newColor: string): void => {
    const index = color.findIndex((e) => e.color === oldColor);
    let newValue = [...color];

    if (index !== -1) {
      newValue[index].name = getColorName(newColor);
      newValue[index].color = newColor;

      setColor(newValue);
      localStorage.setItem('color-scheme', JSON.stringify(newValue));
    }
  }

  const addNewColor = (item: ColorList): void => {
    setColor([...color, item]);
    localStorage.setItem('color-scheme', JSON.stringify([...color, item]));
  }

  const changeStyle = (value: SchemeStyle): void => {
    setStyle(value);
  }

  useEffect(() => {
    const localData = localStorage.getItem('color-scheme');

    if (!isLocalStorageEmpty() && localData) {
      setColor(JSON.parse(localData));
    } else {
      setColor(defaultData);
    }
  }, []);
  

  return (
    <Context.Provider
      value={{
        color,
        setColor,
        style,
        setStyle,
        changeColor,
        addNewColor,
        changeStyle,
        deleteColor
      }}
    >
      {children}
    </Context.Provider>
  )
}

export function useContextProvider() {
  return useContext(Context) as IContextInterface
}