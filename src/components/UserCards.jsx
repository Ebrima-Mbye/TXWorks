import React, { useEffect, useState } from "react";

const UserCards = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Fetching user data
        const userResponse = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const usersData = await userResponse.json();

        // Fetching random profile pictures
        const photos = await Promise.all(
          usersData
            .slice(0, 10) // Only 10 users
            .map(() =>
              fetch("https://randomuser.me/api/").then((res) => res.json())
            )
        );

        // Merging user data with photos
        const usersWithPhotos = usersData.slice(0, 10).map((user, index) => ({
          ...user,
          photo: photos[index].results[0].picture.medium,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        }));

        setUsers(usersWithPhotos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="card-container">
      {users.map((user, index) => (
        <div className="card" key={index}>
          <img
            src={user.photo}
            alt={`${user.name}'s profile`}
            className="profile-img"
          />
          <h3>{user.name}</h3>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>{user.description}</p>
        </div>
      ))}
    </div>
  );
};

export default UserCards;
