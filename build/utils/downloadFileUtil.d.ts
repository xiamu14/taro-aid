export declare type FileType = 
/** doc 格式 */
"doc"
/** docx 格式 */
 | "docx"
/** xls 格式 */
 | "xls"
/** xlsx 格式 */
 | "xlsx"
/** ppt 格式 */
 | "ppt"
/** pptx 格式 */
 | "pptx"
/** pdf 格式 */
 | "pdf";
export interface Params {
    url: string;
    fileName: string;
    fileType: FileType;
}
export declare type DownloadFileSuccess = {
    /** 用户文件路径。传入 filePath 时会返回，跟传入的 filePath 一致 */
    filePath: string;
    /** 临时文件路径。没传入 filePath 指定文件存储路径时会返回，下载后的文件会存储到一个临时文件 */
    tempFilePath: string;
    /**
     * 数据长度，单位 Byte
     * @supported weapp
     * @weapp 非官方文档标注属性
     */
    dataLength?: number;
};
/**
 * @description 从网络端下载文件的基础函数，解决文件名和文件类型问题；不要直接使用此函数，应该根据需求进一步封装，比如：downloadFileForShare, downloadFileForOpen
 * @param param0
 *
 * @returns
 */
export declare function downloadFileUtil({ url, fileName, fileType, }: Params): Promise<DownloadFileSuccess>;
/**
 * 下载文件并打开预览
 * @param data
 * @returns
 */
export declare function downloadFileForOpen(data: Params): Promise<TaroGeneral.CallbackResult>;
