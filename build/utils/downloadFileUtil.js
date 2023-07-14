"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadFileForOpen = exports.downloadFileUtil = void 0;
const taro_1 = __importDefault(require("@tarojs/taro"));
/**
 * @description 从网络端下载文件的基础函数，解决文件名和文件类型问题；不要直接使用此函数，应该根据需求进一步封装，比如：downloadFileForShare, downloadFileForOpen
 * @param param0
 *
 * @returns
 */
async function downloadFileUtil({ url, fileName, fileType, }) {
    const result = await taro_1.default.downloadFile({
        url,
        filePath: `${taro_1.default.env.USER_DATA_PATH}/${fileName}.${fileType}`,
    });
    if (result.statusCode === 200) {
        return result;
    }
    throw new Error(result.errMsg);
}
exports.downloadFileUtil = downloadFileUtil;
/**
 * 下载文件并打开预览
 * @param data
 * @returns
 */
async function downloadFileForOpen(data) {
    const result = await downloadFileUtil(data);
    return taro_1.default.openDocument({
        filePath: result.filePath,
        fileType: data.fileType,
    });
}
exports.downloadFileForOpen = downloadFileForOpen;
