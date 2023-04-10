migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("08dr0qgj6c6772r")

  // remove
  collection.schema.removeField("f2iy0lfh")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("08dr0qgj6c6772r")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f2iy0lfh",
    "name": "user",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
