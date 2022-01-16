export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '61e496f898345c6bd883c3b6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-4mzmccvt',
                  apiId: '089c5571-1e93-4d0f-80f4-ac419f9436ab'
                },
                {
                  buildHookId: '61e496f82224af94c2fda88b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-i4kmv4fi',
                  apiId: '81f6b387-77e6-4808-9b18-ed9ec519f58c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Stig11686/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-i4kmv4fi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
