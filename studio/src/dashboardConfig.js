export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec06212123405a78302d2d3',
                  title: 'Sanity Studio',
                  name: 'sanity-blog-studio-u4h2x1v3',
                  apiId: '0f74e9ed-49b9-4c62-998b-56f9cb16a7ec'
                },
                {
                  buildHookId: '5ec0621258e87880804bafe4',
                  title: 'Blog Website',
                  name: 'sanity-blog-web-bhi2o1ke',
                  apiId: '5f2858a7-04cb-48cc-bf2d-c191d827162d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/richburdon/sanity-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-blog-web-bhi2o1ke.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
