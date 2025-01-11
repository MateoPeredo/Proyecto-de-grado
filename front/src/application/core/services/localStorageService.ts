export const localStorageService = {
  setItem: (key: string, value: any ) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Error al guardar "${key}" en localStorage:`, error);
      return false;
    }
  },

  getItem: <T>(key: string): T | null => {
    try {
      const value = localStorage.getItem(key);
      return value ? (JSON.parse(value) as T) : null;
    } catch (error) {
      console.error(`Error al obtener "${key}" de localStorage:`, error);
      return null;
    }
  },

  removeItem: (key: string): boolean => {
    try {
      if (localStorage.getItem(key) === null) {
        console.warn(`El item con la clave "${key}" no existe.`);
        return false;
      }
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Error al eliminar "${key}" de localStorage:`, error);
      return false;
    }
  },

  clear: (): boolean => {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error(`Error al limpiar localStorage:`, error);
      return false;
    }
  },
};
