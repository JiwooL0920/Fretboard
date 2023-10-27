package db

import (
	"context"
	"testing"

	"github.com/jiwool0920/Fretboard/util"
	"github.com/stretchr/testify/require"
)

func createRandomUser(t *testing.T) User {
	arg := CreateUserParams{
		Username:  util.RandomString(10), // "jiwool0920",
		FirstName: util.RandomString(5),  //"jiwoo",
		LastName:  util.RandomString(5),  //"lee",
		Email:     util.RandomEmail(10),  //"jiwool0920@gmail.com",
	}

	user, err := testQueries.CreateUser(context.Background(), arg)
	require.NoError(t, err)
	require.NotEmpty(t, user)

	require.Equal(t, arg.Username, user.Username)
	require.Equal(t, arg.FirstName, user.FirstName)
	require.Equal(t, arg.LastName, user.LastName)
	require.Equal(t, arg.Email, user.Email)

	require.NotZero(t, user.CreatedAt)

	return user
}

func TestCreateUser(t *testing.T) {
	createRandomUser(t)
}

func TestGetUser(t *testing.T) {
	user1 := createRandomUser(t)
	user2, err := testQueries.GetUser(context.Background(), user1.Username)

	require.NoError(t, err)
	require.NotEmpty(t, user2)

	require.Equal(t, user1.Username, user2.Username)
	require.Equal(t, user1.FirstName, user2.FirstName)
	require.Equal(t, user1.LastName, user2.LastName)
	require.Equal(t, user1.Email, user2.Email)
	require.Equal(t, user1.CreatedAt, user2.CreatedAt)
}
