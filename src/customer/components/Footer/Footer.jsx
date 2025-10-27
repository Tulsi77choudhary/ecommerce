import { Button, Grid, Typography, Link } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        container
        spacing={{ xs: 4, sm: 6, md: 8 }}
        justifyContent="center"
        sx={{ bgcolor: "black", color: "white", py: 5 }}
      >
        {[
          { title: "Company", items: ["About", "Blog", "Jobs", "Press", "Partners"] },
          { title: "Solutions", items: ["Marketing", "Analytics", "Commerce", "Insights", "Support"] },
          { title: "Documentation", items: ["Guides", "API Status"] },
          { title: "Legal", items: ["Claim", "Privacy", "Terms"] },
        ].map((section) => (
          <Grid key={section.title} item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              {section.title}
            </Typography>
            {section.items.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "white",
                  textTransform: "none",
                  display: "block",
                  p: 0,
                  "&:hover": {
                    color: "primary.main",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Grid>
        ))}

        <Grid item xs={12}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Company, All rights reserved.
          </Typography>
          <Typography variant="body2" align="center">
            Made with ❤️ by Me.
          </Typography>
          <Typography variant="body2" align="center">
            Icon made by{" "}
            <Link
              href="https://www.flaticon.com/free-icons/icon"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "white", textDecoration: "underline" }}
            >
              Freepik - Flaticon
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
