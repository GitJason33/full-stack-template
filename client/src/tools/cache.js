// install dexie if you want this file
import Dexie from "dexie"; 


// init the cache database
const cache = new Dexie('todolistjason33_cache');

// init the cache database table
cache.version(1).stores({
  exampleTodos: "id, json",
  userTodos: "id, json",
})


export const getFromCache = async (table) => {
  try {
    const results = await cache[table].where('id').equals(1).first();

    return JSON.parse(results.json);
  } catch (err) {
    console.error('Error retrieving from cache:', err.message);
    return null;
  }
}


export const saveToCache = async (table, todos) => {
  try {
    await cache[table].put({ id: 1, json: JSON.stringify(todos) });
  }catch (err){
    console.log("failed to save to cache:", err.message);
  }
}


export const updateInCache = async (table, updatedTodos) => {
  try {
    const existingEntry = await cache[table].where('id').equals(1).first();

    if (existingEntry) {
      await cache[table].where('id').equals(1).modify({
        json: JSON.stringify(updatedTodos),
      });
    }
  }catch (err){
    console.error(`Error updating data in cache:`, err.message);
  }
}
