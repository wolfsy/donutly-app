import { Image, Stack } from 'react-bootstrap';

import './AvatarRow.css'

function AvatarRow({avatars}) {

  return (
    <Stack className="my-2 d-flex justify-content-center" direction="horizontal">
        {
            avatars.map(function(x, idx)
            {
                return (<Image key={idx} src={x.avatarUrl} className="avatar-img" />)
            })
        }
    </Stack>
  )

}

export default AvatarRow