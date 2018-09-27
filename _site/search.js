
function newFunction() {
  const search = instantsearch({
    appId: '{{ site.algolia.application_id }}',
    apiKey: '{{ site.algolia.search_only_api_key }}',
    indexName: '{{ site.algolia.index_name }}'
  });
  const hitTemplate = function (hit) {
    let date = '';
    if (hit.date) {
      date = moment.unix(hit.date).format('MMM D, YYYY');
    }
    let url = `{{ site.baseurl }}${hit.url}#${hit.anchor}`;
    const title = `{{ site.baseurl }}${hit.blog_title}`;
    const image = `{{ site.baseurl }}${hit.image}`;
    let breadcrumbs = '';
    if (hit._highlightResult.headings) {
      breadcrumbs = hit._highlightResult.headings.map(match => {
        return `<span class="post-breadcrumb">${match.value}</span>`;
      }).join(' > ');
    }
    const content = hit._highlightResult.html.value;
    return `
  <div class="flex-container table">
    <div class="category-box">
     <div class="whiteBox smallBlog">
      <a class="post-link" href="${url}">
      <img class="categ-img" src="${image}" alt="beijing">
      <div class="smallBlogText">${title}
      <span class="postDate">${date}</span></div></a>
      {{#breadcrumbs}}<a href="${url}" class="post-breadcrumbs">${breadcrumbs}</a>{{/breadcrumbs}}
      <div class="blogContainer">${content}</div>
      </div>
      </div>
    </div>
  `;
  };
  search.addWidget(instantsearch.widgets.searchBox({
    container: '#search-searchbar',
    placeholder: 'Search into posts...',
    poweredBy: true
  }));
  search.addWidget(instantsearch.widgets.hits({
    container: '#search-hits',
    templates: {
      item: hitTemplate
    }
  }));
  search.start();
}
