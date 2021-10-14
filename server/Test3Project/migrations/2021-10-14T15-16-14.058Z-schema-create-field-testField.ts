import { Context, MigrationVersion } from "./typing.v1";

export const version: MigrationVersion = "v1";

export const up = async (context: Context) => {
  {
    const data: any = {
      defaultValue: null,
      displayName: "testField",
      fieldType: "TEXT",
      fieldTypeAttributes: { fieldSize: 100, format: "UNFORMATTED" },
      id: "616848fb2c02140009cb4a22",
      isList: false,
      isRequired: false,
      isUnique: false,
      name: "testField",
      table: { name: "Notes" },
    };
    await context.schema.field.create(data);
  }
};
