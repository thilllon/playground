import React, { createContext, useContext } from 'react';
import shortid from 'shortid';
import { gql } from '@apollo/client';

const GET_ROOMS = gql`
  query($gameId: String!) {
    rooms(gameId: $gameId) {
      gameName
      status
      name
      ip
    }
  }
`;

const ENTER_ROOM = gql`
  mutation($roomId: String!) {
    enterRoom(roomId: $roomId) {
      token
    }
  }
`;

const nameHtmlId = shortid.generate();
const ipHtmlId = shortid.generate();

const Entrance = () => {
  // const history = useHistory();
  const [enterRoom, enterRoomResult] = useMutation(ENTER_ROOM);

  useEffect(() => {
    const token = enterRoomResult.data?.enterRoom?.token;
    if (token) {
      // history.push(`/game/lost-cities/${roomId}`);
    }
  }, [enterRoomResult.data?.enterRoom]);

  const { loading, error, data } = useQuery(GET_ROOMS, {
    variables: {
      gameId: 'G0001',
    },
  });

  const onSubmit = (ev) => {
    ev.preventDefault();
    enterRoom({
      variables: {
        roomId: null,
      },
    });
  };

  return (
    <div>
      {data?.rooms &&
        data.rooms.map((elem) => (
          <div>
            <div>{elem.gameName}</div>
            <div>{elem.status}</div>
            <div>{elem.ip}</div>
          </div>
        ))}
      <form onSubmit={onSubmit}>
        <label htmlFor={nameHtmlId}>이름</label>
        <input id={nameHtmlId} name='name' />
        <label htmlFor={ipHtmlId}>IP주소</label>
        <input id={ipHtmlId} name='ip' />
        <button type='submit'>입장</button>
      </form>
    </div>
  );
};

export default Entrance;
