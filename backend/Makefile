postgres:
	docker run --name fretboard -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres:12-alpine

create-db:
	docker exec -it fretboard createdb --username=root --owner=root fret_db

drop-db:
	docker exec -it fretboard dropdb fret_db

migrate-up:
	migrate -path db/migration -database "postgresql://root:secret@localhost:5432/fret_db?sslmode=disable" -verbose up

migrate-down:
	migrate -path db/migration -database "postgresql://root:secret@localhost:5432/fret_db?sslmode=disable" -verbose down

sqlc:
	sqlc generate

test:
	go test -v -cover ./...

server:
	go run main.go

.PHONY: postgres createdb dropdb migrateup migratedown sqlc test server
