import type { CollectionConfig } from 'payload'

export const Properties: CollectionConfig = {
  slug: 'Properties',
  admin: {
    useAsTitle: 'title', // Use the 'title' field as the main identifier in the admin panel
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true, // Ensure slugs are unique
      admin: {
        position: 'sidebar', // Display in the sidebar of the admin panel
      },
    },
    {
      name: 'content',
      type: 'richText', // For rich text content with formatting options
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'author',
      type: 'relationship', // Link to a 'Users' collection for authors
      relationTo: 'users',
      required: true,
    },
  ],
}
