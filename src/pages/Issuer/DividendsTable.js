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

import useData from "../../hooks/useData";

function DividendsTable(props) {
  const params = useParams();
  const { get } = useData();

  const [dividends, setDividends] = useState([]);
  useLayoutEffect(() => {
    (async () => {
      if (params.id) {
        const { data } = await get(`issuers/dividends/${params.id}`);
        if (data && Array.isArray(data) && data.length > 0) {
		  const sortedData = data.sort(
			(a, b) => new Date(b.bookClosureDate) - new Date(a.bookClosureDate)
		  );	
          setDividends(sortedData);
        } else {
          setDividends([]);
        }
      }
    })();
  }, [params]);

  return (
    <Stack spacing={2}>
      <Typography variant="h6" component="h3">
        Dividends
      </Typography>

      <TableContainer>
        <Table aria-label="dividends table">
          <TableHead>
            <TableRow>
              <TableCell>Book closure date</TableCell>
              <TableCell>Disbursment date</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Rate</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dividends.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} sx={{ textAlign: "center" }}>
                  NO DIVIDENDS AVAILABLE
                </TableCell>
              </TableRow>
            )}
            {dividends &&
              dividends.map((dividend) => (
                <TableRow
                  key={`dividend-${dividend.id}`}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    {dateformat(
                      new Date(dividend.bookClosureDate),
                      "paddedShortDate"
                    )}
                  </TableCell>
                  <TableCell>
                    {dateformat(
                      new Date(dividend.disbursmentDate),
                      "paddedShortDate"
                    )}
                  </TableCell>
                  <TableCell>
                    {dateformat(new Date(dividend.bookClosureDate), "yyyy")}
                  </TableCell>
                  <TableCell>{dividend.dividendType}</TableCell>
                  <TableCell>{dividend.dividendRate}</TableCell>
                  <TableCell>
                    <Chip
                      label={dividend.status}
                      color={
                        dividend.status === "completed" ? "success" : "warning"
                      }
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

export default DividendsTable;
