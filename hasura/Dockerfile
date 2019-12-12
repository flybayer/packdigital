FROM hasura/graphql-engine:v1.0.0-rc.1.cli-migrations

COPY ./migrations /hasura-migrations

CMD graphql-engine \
    --database-url $DATABASE_URL \
    serve
