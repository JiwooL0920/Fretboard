// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.23.0
// source: user.sql

package db

import (
	"context"
)

const createUser = `-- name: CreateUser :one
INSERT INTO users (
  username,
  first_name,
  last_name,
  email
) VALUES (
  $1, $2, $3, $4
) RETURNING username, first_name, last_name, email, created_at
`

type CreateUserParams struct {
	Username  string `json:"username"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Email     string `json:"email"`
}

func (q *Queries) CreateUser(ctx context.Context, arg CreateUserParams) (User, error) {
	row := q.db.QueryRow(ctx, createUser,
		arg.Username,
		arg.FirstName,
		arg.LastName,
		arg.Email,
	)
	var i User
	err := row.Scan(
		&i.Username,
		&i.FirstName,
		&i.LastName,
		&i.Email,
		&i.CreatedAt,
	)
	return i, err
}

const deleteUser = `-- name: DeleteUser :exec
DELETE FROM users
WHERE username = $1
`

func (q *Queries) DeleteUser(ctx context.Context, username string) error {
	_, err := q.db.Exec(ctx, deleteUser, username)
	return err
}

const getUser = `-- name: GetUser :one
SELECT username, first_name, last_name, email, created_at FROM users
WHERE username = $1
LIMIT 1
`

func (q *Queries) GetUser(ctx context.Context, username string) (User, error) {
	row := q.db.QueryRow(ctx, getUser, username)
	var i User
	err := row.Scan(
		&i.Username,
		&i.FirstName,
		&i.LastName,
		&i.Email,
		&i.CreatedAt,
	)
	return i, err
}
