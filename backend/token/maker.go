package token

import "time"

// an interface for managing token
type Maker interface {
	// creates a new token for a specific username and duration
	CreateToken(username string, duration time.Duration) (string, error)

	// checks if the token is valid or not
	VerifyToken(token string) (*Payload, error)
}
