export class IEnv {
    DB_CONNECTION: string;
    DB_HOST_WRITE_CLUSTER: string;
    DB_HOST_READ_CLUSTER: string;
    DB_HOST: string;
    DB_PORT: number;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_NAME: string;
    DB_SYNCHRONIZE: boolean;
    DB_LOGGING: boolean;
    PORT = 3000
}