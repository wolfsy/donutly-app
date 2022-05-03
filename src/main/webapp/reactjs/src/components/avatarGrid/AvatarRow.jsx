import { Col, Stack } from 'react-bootstrap';

import './AvatarRow.css'

function AvatarRow({avatars}) {

  return (
    <Stack className="my-1" direction="horizontal">
        {
            avatars.map(function(x)
            {
                return (<><h5 className="avatar-img">{x.firstName}</h5></>)
            })
        }
    </Stack>
  )

}

export default AvatarRow