import React from 'react';
import { Box, Stack } from '@mui/system';
import {
  IconX,
  IconCheck,
  IconArrowBackUp,
} from '@tabler/icons';
import {
  Card,
  Chip,
  Table,
  Avatar,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Typography,
  TableContainer,
  LinearProgress,
} from '@mui/material';

const rows = [
  {
    no: 3066,
    status: 'paid',
    avatar:
      'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-1.jpg',
    cname: 'Olivia Rhye',
    email: 'olivia@ui.com',
    percent: 60,
  },
  {
    no: 3067,
    status: 'cancelled',
    avatar:
      'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-2.jpg',
    cname: 'Barbara Steele',
    email: 'steele@ui.com',
    percent: 30,
  },
  {
    no: 3068,
    status: 'paid',
    avatar:
      'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-3.jpg',
    cname: 'Leonard Gordon',
    email: 'olivia@ui.com',
    percent: 45,
  },
  {
    no: 3069,
    status: 'refunded',
    avatar:
      'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-4.jpg',
    cname: 'Evelyn Pope',
    email: 'steele@ui.com',
    percent: 37,
  },
  {
    no: 3070,
    status: 'cancelled',
    avatar:
      'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-5.jpg',
    cname: 'Tommy Garza',
    email: 'olivia@ui.com',
    percent: 87,
  },
  {
    no: 3071,
    status: 'refunded',
    avatar:
      'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-6.jpg',
    cname: 'Isabel Vasquez',
    email: 'steele@ui.com',
    percent: 32,
  },
];

const InvoiceManagement = () => {
  return (
    <Card variant="outlined">
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Invoice
                </Typography>
              </TableCell>

              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Status
                </Typography>
              </TableCell>

              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Customer
                </Typography>
              </TableCell>

              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Progress
                </Typography>
              </TableCell>

              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.no} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell scope="row">
                  <Typography variant="subtitle1" color="textPrimary" fontWeight={500}>
                    INV-{row.no}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    icon={
                      row.status === 'paid' ? (
                        <IconCheck width={16} />
                      ) : row.status === 'cancelled' ? (
                        <IconX width={16} />
                      ) : (
                        <IconArrowBackUp width={16} />
                      )
                    }
                    sx={{
                      backgroundColor:
                        row.status === 'paid'
                          ? 'rgb(236,242,255)'
                          : row.status === 'cancelled'
                          ? 'rgb(253,237,232)'
                          : 'rgb(232,247,255)',
                      color:
                        row.status === 'paid'
                          ? 'rgb(93, 135, 255)'
                          : row.status === 'cancelled'
                          ? 'rgb(250,137,107)'
                          : 'rgb(73,190,255)',
                      '.MuiChip-icon': {
                        color: 'inherit !important',
                      },
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <Avatar src={row.avatar} alt={row.avatar} sx={{ width: 42, height: 42 }} />
                    <Box>
                      <Typography variant="subtitle1">{row.cname}</Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {row.email}
                      </Typography>
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box width="100%">
                      <LinearProgress variant="determinate" value={row.percent} color="primary" />
                    </Box>
                    <Typography variant="subtitle2" color="textSecondary">
                      {row.percent}%
                    </Typography>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default InvoiceManagement;
