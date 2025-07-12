export interface IFileProps {
    name: any;
    id(id: any): Promise<any>;
    fileName: string,
    filePath: string,
    size: number
}