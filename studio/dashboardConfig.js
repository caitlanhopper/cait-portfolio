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
                  buildHookId: '60f55c3db66d4bf0c303ca6c',
                  title: 'Sanity Studio',
                  name: 'cait-portfolio-studio',
                  apiId: '0932d6bc-f3b5-4fd1-92cc-ade1ee0c250e'
                },
                {
                  buildHookId: '60f55c3d8cfedbe364652a55',
                  title: 'Portfolio Website',
                  name: 'cait-portfolio-web',
                  apiId: '6bf1d6c4-92d2-4971-8adf-e4c0fd03d564'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/caitlanhopper/cait-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://cait-portfolio-web.netlify.app',
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
