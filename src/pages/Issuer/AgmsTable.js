import React, { useState, useLayoutEffect } from "react";
import {
  Stack,
  Chip,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import dateformat from "dateformat";
import { useParams } from "react-router-dom";

import { useData } from "../../hooks";

function AgmsTable(props) {
  const params = useParams();
  const { get } = useData();

  const [agms, setAgms] = useState([]);
  useLayoutEffect(() => {
    (async () => {
      if (params.id) {
        const { data } = await get(`issuers/agms/${params.id}`);

        if (data && Array.isArray(data) && data.length > 0) {
          const sortedData = data.sort(
            (a, b) => new Date(b.agmDate) - new Date(a.agmDate)
          );
          setAgms(sortedData);
        } else {
          setAgms([]);
        }
      }
    })();
  }, [params]);

  return (
    <Stack spacing={2}>
      <Typography variant="h6" component="h3">
        Annual General Meetings (AGMS)
      </Typography>

      <TableContainer>
        <Table aria-label="agms table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Venue</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {agms.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} sx={{ textAlign: "center" }}>
                  NO AGMS AVAILABLE
                </TableCell>
              </TableRow>
            )}
            {agms &&
              agms.map((agm) => (
                <TableRow
                  key={`agm-${agm.id}`}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    {dateformat(new Date(agm.agmDate).toUTCString(), "mm/dd/yyyy h:MM TT")}
                  </TableCell>
                  <TableCell>{agm.title}</TableCell>
                  <TableCell>
                    {dateformat(new Date(agm.agmDate).toUTCString(), "yyyy")}
                  </TableCell>
                  <TableCell>{agm.venue}</TableCell>
                  <TableCell>
                    <Chip
                      label={agm.status}
                      color={agm.status === "completed" ? "success" : "default"}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}

export default AgmsTable;
