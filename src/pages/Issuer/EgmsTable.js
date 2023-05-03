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

function EgmsTable(props) {
  const params = useParams();
  const { get } = useData();

  const [egms, setEgms] = useState([]);
  useLayoutEffect(() => {
    (async () => {
      if (params.id) {
        const { data } = await get(`issuers/egms/${params.id}`);
        if (data && Array.isArray(data) && data.length > 0) {
          const sortedData = data.sort(
            (a, b) => new Date(b.egmDate) - new Date(a.egmDate)
          );
          setEgms(sortedData);
        } else {
          setEgms([]);
        }
      }
    })();
  }, [params]);

  return (
    <Stack spacing={2}>
      <Typography variant="h6" component="h3">
        Extraordinary General Meetings (AGMS)
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
            {egms.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} sx={{ textAlign: "center" }}>
                  NO EGMS AVAILABLE
                </TableCell>
              </TableRow>
            )}
            {egms &&
              egms.map((egm) => (
                <TableRow
                  key={`agm-${egm.id}`}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    {dateformat(new Date(egm.egmDate).toUTCString(), "mm/dd/yyyy h:MM TT")}
                  </TableCell>
                  <TableCell>{egm.title}</TableCell>
                  <TableCell>
                    {dateformat(new Date(egm.egmDate), "yyyy")}
                  </TableCell>
                  <TableCell>{egm.venue}</TableCell>
                  <TableCell>
                    <Chip
                      label={egm.status}
                      color={egm.status === "completed" ? "success" : "default"}
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

export default EgmsTable;
