export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '61095aee7471eb35320e1397',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-r3isoays',
                  apiId: '994db144-f5be-4f7e-b2df-db72304eb899'
                },
                {
                  buildHookId: '61095aef422fca1514ac74d2',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ozn44jxz',
                  apiId: 'e91a48ff-483f-462f-afb0-432c1495e207'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LucasZapico/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ozn44jxz.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
