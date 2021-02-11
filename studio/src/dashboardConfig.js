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
                  buildHookId: '602568dfd4e48a4cfec5712d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-zxo6twj8',
                  apiId: '9c484396-4bd0-4439-a3ce-9203d1ae1cf9'
                },
                {
                  buildHookId: '602568dfd4e48a4efbc56c12',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8w4to2co',
                  apiId: '02e5f627-3664-4a64-81b4-e2166e51c247'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sailfuture/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8w4to2co.netlify.app', category: 'apps' }
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
