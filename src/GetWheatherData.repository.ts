const sqlite3 = require("sqlite3").verbose();

export class GetWheatherDataRepository {
  public async getData(): Promise<Object[]> {
    let db = new sqlite3.Database("./mydb.sqlite3");

    const returnData: object[] = [];
    const sql = "select * from WeatherData limit 1,1";
    // const sql = "select * from WeatherData limit 1,1";

    const res = await new Promise((resolve, reject) => {
      db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach((row) => {
          returnData.push(row);
        });
        resolve(returnData);
      });
    });
    return res as object[];
  }
}
