// Add customer record to database and get all store from uesr
import pool from "../db.js"

const updateUserStore = async (userId, hwid, date, time) => {
  const insertQuery = `
    INSERT INTO beacon.customer_records (userid, hwid, date, time)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;

  const fetchQuery = `
    SELECT cr.userid, cr.hwid, cr.date, si.shop_name, si.shop_category, si.floor, si.ads_message
    FROM beacon.customer_records cr
    INNER JOIN beacon.shop_info si ON cr.hwid = si.hwid 
    WHERE cr.userid = $1
    AND cr.date = $2
    ORDER BY cr.time DESC;
  `;

  const values = [userId, hwid, date, time];

  const connection = await pool.connect()


  try {
    // Insert a new row
    const insertResult = await connection.query(insertQuery, values);
    console.log("Inserted row:", insertResult.rows[0]);

    // Fetch rows based on the same userid
    const fetchResult = await connection.query(fetchQuery, [userId,date]);
    //console.log("Fetched rows:", fetchResult.rows);

    return fetchResult.rows;
  } catch (err) {
    console.error("Error executing query", err);
    return null;
  } finally {
    await connection.release(); // Ensure the client connection is closed
    console.log("Connection closed");
  }
};


export default updateUserStore;
