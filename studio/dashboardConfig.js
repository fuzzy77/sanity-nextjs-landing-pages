export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '633ff0f5708f0b2afe491579',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-bk2fdqd7',
                  apiId: 'fc6c88cd-28cb-42f5-b51f-e94d9c4aa6f9'
                },
                {
                  buildHookId: '633ff0f54a38ca24dc94a357',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6nq9rcda',
                  apiId: '56a4420c-7d7d-4b39-9a1f-9a6a7ee6b4ae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fuzzy77/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6nq9rcda.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
