// import { _app_config } from "@app-config/app.config";

export const initialBook = {
    name: "",
    id: ""
}

export const loadBookState = () => {
    try {
        const serialzedState = localStorage.getItem('itembooks');
        if (serialzedState === null) {
            return initialBook;
        }
        return JSON.parse(serialzedState);
    } catch (error) {
        return initialBook;
    }
}

export const saveBookState = (state:any) => {
    try {
        const serialzedState = JSON.stringify(state);
        localStorage.setItem('itembooks', serialzedState)
    } catch (error) {

    }
}