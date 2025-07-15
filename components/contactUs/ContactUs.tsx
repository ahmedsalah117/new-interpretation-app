import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Grid,
  TextField,
  MenuItem,
  Button,
  Divider,
  IconButton,
  useMediaQuery,
  useTheme,
  Paper,
  Snackbar,
  Alert,
  Container,
  Fade,
  Grow,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import {
  Phone,
  Email,
  LocationOn,
  Chat,
  Twitter,
  YouTube,
  Facebook,
  LinkedIn,
  Send,
  CheckCircle,
  Business,
  Support,
  Language,
} from "@mui/icons-material";

const inquiryTypes = [
  { value: "general", label: "General Inquiry", icon: Chat },
  { value: "sales", label: "Sales & Partnerships", icon: Business },
  { value: "support", label: "Technical Support", icon: Support },
  { value: "interpretation", label: "Interpretation Services", icon: Language },
  { value: "other", label: "Other", icon: Chat },
];

const ContactUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setShowSuccess(true);

    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      items: [
        { label: "Sales", value: "+1 (555) 123-4567" },
        { label: "Support", value: "+1 (555) 987-6543" },
      ],
      color: "#03adb5",
    },
    {
      icon: Email,
      title: "Email",
      items: [
        { label: "General", value: "info@interpretai.com" },
        { label: "Sales", value: "sales@interpretai.com" },
        { label: "Support", value: "support@interpretai.com" },
      ],
      color: "#e41469",
    },
    {
      icon: LocationOn,
      title: "Locations",
      items: [
        {
          label: "San Francisco (HQ)",
          value: "123 Interpreter Street, CA 94102",
        },
        { label: "New York", value: "456 Language Avenue, NY 10001" },
      ],
      color: "#03adb5",
    },
  ];

  const socialIcons = [
    { icon: Twitter, color: "#1da1f2", href: "#" },
    { icon: LinkedIn, color: "#0077b5", href: "#" },
    { icon: YouTube, color: "#ff0000", href: "#" },
    { icon: Facebook, color: "#1877f2", href: "#" },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #03adb5 0%, #e41469 100%)",
        minHeight: "100vh",
        py: 8,
        position: "relative",
        overflow: "hidden",
        paddingTop: "150px",
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="60" r="0.5" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="40" r="0.5" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>\')',
          opacity: 0.3,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Fade in timeout={1000}>
          <Stack spacing={6} alignItems="center" textAlign="center" mb={8}>
            <Typography
              variant="h2"
              fontWeight={800}
              sx={{
                color: "white",
                textShadow: "0 4px 8px rgba(0,0,0,0.3)",
                mb: 2,
              }}
            >
              Get in Touch
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "rgba(255,255,255,0.9)",
                maxWidth: 700,
                textShadow: "0 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              Ready to break down language barriers? Our team is here to help
              you connect with the world.
            </Typography>
          </Stack>
        </Fade>

        <Grid container spacing={4}>
          {/* Contact Information Cards */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Stack spacing={3}>
              {contactInfo.map((info, index) => (
                <Grow in timeout={800 + index * 200} key={info.title}>
                  <Card
                    sx={{
                      background: "rgba(255,255,255,0.95)",
                      backdropFilter: "blur(10px)",
                      borderRadius: 4,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={2}
                        mb={2}
                      >
                        <Avatar
                          sx={{
                            bgcolor: info.color,
                            width: 48,
                            height: 48,
                          }}
                        >
                          <info.icon />
                        </Avatar>
                        <Typography
                          variant="h6"
                          fontWeight={600}
                          color="text.primary"
                        >
                          {info.title}
                        </Typography>
                      </Stack>
                      <Stack spacing={1}>
                        {info.items.map((item, idx) => (
                          <Box key={idx}>
                            <Typography
                              variant="subtitle2"
                              fontWeight={600}
                              color="text.secondary"
                            >
                              {item.label}
                            </Typography>
                            <Typography variant="body2" color="text.primary">
                              {item.value}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grow>
              ))}

              {/* Social Media */}
              <Grow in timeout={1400}>
                <Card
                  sx={{
                    background: "rgba(255,255,255,0.95)",
                    backdropFilter: "blur(10px)",
                    borderRadius: 4,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <CardContent sx={{ p: 3, textAlign: "center" }}>
                    <Typography variant="h6" fontWeight={600} mb={2}>
                      Follow Us
                    </Typography>
                    <Stack direction="row" spacing={2} justifyContent="center">
                      {socialIcons.map((social, index) => (
                        <IconButton
                          key={index}
                          sx={{
                            bgcolor: social.color,
                            color: "white",
                            width: 48,
                            height: 48,
                            transition: "all 0.3s ease",
                            "&:hover": {
                              bgcolor: social.color,
                              transform: "scale(1.1)",
                              boxShadow: `0 4px 12px ${social.color}40`,
                            },
                          }}
                          href={social.href}
                          target="_blank"
                        >
                          <social.icon />
                        </IconButton>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grow>
            </Stack>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Grow in timeout={600}>
              <Card
                sx={{
                  background: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 4,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  height: "fit-content",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h4"
                    fontWeight={700}
                    gutterBottom
                    sx={{
                      background:
                        "linear-gradient(143deg, #03adb5 0%, #e41469 82.25%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      mb: 3,
                    }}
                  >
                    Send Us a Message
                  </Typography>

                  {isSubmitted && (
                    <Alert
                      severity="success"
                      icon={<CheckCircle />}
                      sx={{
                        mb: 3,
                        borderRadius: 2,
                        background: "rgba(76, 175, 80, 0.1)",
                        border: "1px solid rgba(76, 175, 80, 0.3)",
                      }}
                    >
                      Thank you! We'll respond within 24 hours.
                    </Alert>
                  )}

                  <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          label="Full Name"
                          value={formData.fullName}
                          onChange={handleChange("fullName")}
                          fullWidth
                          required
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: 2,
                              "&:hover fieldset": {
                                borderColor: "#03adb5",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#03adb5",
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          label="Email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange("email")}
                          fullWidth
                          required
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: 2,
                              "&:hover fieldset": {
                                borderColor: "#03adb5",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#03adb5",
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          label="Phone"
                          value={formData.phone}
                          onChange={handleChange("phone")}
                          fullWidth
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: 2,
                              "&:hover fieldset": {
                                borderColor: "#03adb5",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#03adb5",
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          select
                          label="Inquiry Type"
                          value={formData.inquiryType}
                          onChange={handleChange("inquiryType")}
                          fullWidth
                          required
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: 2,
                              "&:hover fieldset": {
                                borderColor: "#03adb5",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#03adb5",
                              },
                            },
                          }}
                        >
                          <MenuItem value="" disabled>
                            Select inquiry type
                          </MenuItem>
                          {inquiryTypes.map((opt) => (
                            <MenuItem key={opt.value} value={opt.value}>
                              <Stack
                                direction="row"
                                spacing={1}
                                alignItems="center"
                              >
                                <opt.icon sx={{ fontSize: 20 }} />
                                <span>{opt.label}</span>
                              </Stack>
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          label="Message"
                          value={formData.message}
                          onChange={handleChange("message")}
                          multiline
                          rows={5}
                          fullWidth
                          required
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: 2,
                              "&:hover fieldset": {
                                borderColor: "#03adb5",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#03adb5",
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <Button
                          type="submit"
                          variant="contained"
                          endIcon={<Send />}
                          disabled={isSubmitted}
                          sx={{
                            minWidth: 200,
                            height: 56,
                            borderRadius: 3,
                            background:
                              "linear-gradient(143deg, #03adb5 0%, #e41469 82.25%)",
                            boxShadow: "0 4px 15px rgba(3, 173, 181, 0.4)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              background:
                                "linear-gradient(143deg, #0299a1 0%, #d0125a 82.25%)",
                              boxShadow: "0 6px 20px rgba(3, 173, 181, 0.6)",
                              transform: "translateY(-2px)",
                            },
                            "&:disabled": {
                              background: "rgba(0,0,0,0.12)",
                              color: "rgba(0,0,0,0.38)",
                            },
                          }}
                        >
                          {isSubmitted ? "Message Sent!" : "Send Message"}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          sx={{
            width: "100%",
            borderRadius: 2,
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          Message sent successfully! We'll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactUs;
