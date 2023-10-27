-- name: CreateUser :one
INSERT INTO users (
  username,
  first_name,
  last_name,
  email
) VALUES (
  $1, $2, $3, $4
) RETURNING *;

-- name: GetUser :one
SELECT * FROM users
WHERE username = $1
LIMIT 1;

-- name: DeleteUser :exec
DELETE FROM users
WHERE username = $1;