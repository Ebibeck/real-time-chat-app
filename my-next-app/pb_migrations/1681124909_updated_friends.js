migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("08dr0qgj6c6772r")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4d3geyru",
    "name": "avatar",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oexezlps",
    "name": "username",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("08dr0qgj6c6772r")

  // remove
  collection.schema.removeField("4d3geyru")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oexezlps",
    "name": "username",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
