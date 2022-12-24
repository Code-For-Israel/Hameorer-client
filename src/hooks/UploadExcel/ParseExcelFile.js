import * as xlsx from "xlsx";

export async function parseExcelToJson(fileUrl) {
    const res = await fetch(fileUrl);
    const ab = await res.arrayBuffer(); // recover data as ArrayBuffer
    const wb = xlsx.read(ab);
    const firstSheet = wb.SheetNames[0]
    const worksheet = wb.Sheets[firstSheet]
    const json = xlsx.utils.sheet_to_json(worksheet)
    return json;
}

export function getExcelColumns(excelParsedToJsonData) {
    let allColumnsExcel = []
    for (let i = 0; i < excelParsedToJsonData.length; i++) {
        let row = excelParsedToJsonData[i];
        for (let key in row) {
            if (allColumnsExcel.includes(key) === false)
                allColumnsExcel.push(key)
        }
    }
    return allColumnsExcel;
}

export function getGroupName(excelParsedToJsonData) {
    let row = excelParsedToJsonData[0];
    for (let key in row) {
        if (allColumnsExcel.includes(key) === false)
            allColumnsExcel.push(key)
    }

    return allColumnsExcel;
}

export function extractExcel(allColumnsExcel, excelParsedToJsonData) {
    let newExcelObject = {}
    for (let i = 0; i < allColumnsExcel.length; i++) {
        newExcelObject[allColumnsExcel[i]] = []
    }
    for (let i = 0; i < excelParsedToJsonData.length; i++) {
        let obj = excelParsedToJsonData[i];
        for (let key in obj) {
            let value = obj[key];
            newExcelObject[key].push(value)

        }
    }
    return newExcelObject
}
