export interface Config {
    python: {
        path: string;
        filename: string;
    }
}

export const config: Config = {
    python: {
        path: 'src/python',
        filename: 'script.py'
    }
}