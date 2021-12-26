import React from 'react'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { useFragment } from 'react-relay/hooks'
import graphql from 'babel-plugin-relay/macro'
import initials from 'initials'
import { UserCardFragment$key } from './__generated__/UserCardFragment.graphql'

const query = graphql`
  fragment UserCardFragment on User {
    bio
    company
    email
    id
    location
    login
    name
    url
    avatarUrl
    followers {
      totalCount
    }
    repositories {
      totalCount
    }
    starredRepositories {
      totalCount
    }
  }
`

interface Props {
  userRef: UserCardFragment$key
}

const UserCard: React.FC<Props> = ({ userRef }) => {
  const user = useFragment(query, userRef)
  return (
    <Box sx={{ width: '100%' }}>
      <Card variant="outlined">
        <CardHeader
          avatar={
            <Avatar src={(user.avatarUrl as string) || undefined} aria-label="recipe">
              {initials(user.name || user.login)}
            </Avatar>
          }
          title={
            <Link target="_blank" href={user.url as string}>
              {user.name || user.login}
            </Link>
          }
          subheader={
            <>
              {user.location || ''} <br />
            </>
          }
        />
        <CardContent>
          <Typography component="div">{`Company: ${user.company || 'N/A'}`}</Typography>
          <Typography component="div">{`Followers: ${user.followers.totalCount || 0}`}</Typography>
          <Typography component="div">{`Repositories: ${user.repositories.totalCount || 0}`}</Typography>
          <Typography component="div">{`Starred: ${user.starredRepositories.totalCount || 0}`}</Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default UserCard
