// Get last store user is nearby
import pool from "../db.js"

const findLastStore = async (userId) => {
  const findQuery = `
    SELECT cr.userid, cr.hwid, si.shop_name, si.shop_category, si.floor
    FROM beacon.customer_records cr
    INNER JOIN beacon.shop_info si ON cr.hwid = si.hwid
    WHERE cr.userid = $1
    ORDER BY cr.date DESC, cr.time DESC
    LIMIT 1;
  `;

  const connection = await pool.connect()
  try {

    const result = await connection.query(findQuery, [userId]);

    if (result.rows.length === 0) {
      console.log("No data found");
      return null;
    } else {
      console.log("result:", result.rows);
      return result.rows;
    }
  } catch (err) {
    console.error("Error executing query", err);
    return null;
  } finally {
    await connection.release(); // Ensure the client connection is closed
    console.log("Connection closed")
  }
};

export default findLastStore;
