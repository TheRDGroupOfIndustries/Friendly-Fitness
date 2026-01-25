export default {
  name: "membership",
  title: "Membership Plans",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Plan Name",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "string",
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "cta",
      title: "CTA Button Text",
      type: "string",
    },
    {
      name: "highlight",
      title: "Highlight Plan",
      type: "boolean",
    },
  ],
};
