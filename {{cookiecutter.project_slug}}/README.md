# {{cookiecutter.project_slug}}

Documentation Website powered by Docusaurus.

## build

run the below command to build the project

```shell
make build
```

## run

run the below command to launch the website for local development

```shell
make run
```

{%- if cookiecutter.algolia_enabled == "true" -%}
## algolia search indexing

Run the below command to index the documents on algolia.

```shell
make run-algolia-indexing algolia_indexing_api_key=$ALGOLIA_INDEXING_API_KEY
```
{% endif %}
