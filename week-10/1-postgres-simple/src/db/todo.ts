import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(
  userId: number,
  title: string,
  description: string
) {
  try {
    const query = `INSERT INTO todos (user_id, title, description) VALUES ($1, $2, $3) RETURNING * `;
    const values = [userId, title, description];
    const insetQuery = await client.query(query, values);
    return insetQuery.rows[0];
  } catch (err) {
    console.error("Error during the insertion:", err);
  }
}

/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
  const query = `UPDATE todos
    SET done = true
    WHERE id = $1 RETURNING *`;
  const updateQuery = await client.query(query, [todoId]);
  return updateQuery.rows[0];
}
/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
  try {
    const getQuery = `SELECT * from todos WHERE user_id = $1 `;
    const id = [userId];
    const result = await client.query(getQuery, id);
    return result.rows;
  } catch (err) {
    console.error(err);
    return;
  }
}
