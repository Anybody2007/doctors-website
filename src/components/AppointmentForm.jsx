import React, { useMemo } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import PhoneInput from 'react-phone-input-2';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  MenuItem,
  Button,
  IconButton,
  Box,
  Typography,
  FormHelperText
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-input-2/lib/style.css';
import './AppointmentForm.css';

const treatments = [
  'Cosmetic Procedures',
  'Crowns and Bridges Fixing',
  'Complete/Partial Dentures Fixing',
  'Tooth Extraction',
  'Dental Fillings',
  'Dental Implant Fixing',
  'Laser Surgery',
  'Smile Design',
  'Single Sitting Root Canal'
];

const AppointmentForm = ({ open, onClose }) => {
  const generateTimeSlots = (selectedDate) => {
    if (!selectedDate) return [];

    const day = selectedDate.getDay();
    const currentTime = new Date();
    const slots = [];

    // Wednesday is closed except after 4:30 PM
    if (day === 3) {
      return ['10:30 AM', '11:00 AM', '11:30 PM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM'];
    }

    // Thursday is completely closed
    if (day === 4) {
      return [];
    }

    // Morning slots
    const morningSlots = [
      '10:30 AM', '11:00 AM', '11:30 AM', 
      '12:00 PM', '12:30 PM', '1:00 PM', 
      '1:30 PM', '2:00 PM', '2:30 PM'
    ];

    // Evening slots
    const eveningSlots = [
      '4:30 PM', '5:00 PM', '5:30 PM', 
      '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM'
    ];

    // Filter morning slots based on current time if selected date is today
    const filteredMorningSlots = morningSlots.filter(slot => {
      if (isSameDay(selectedDate, currentTime)) {
        return isTimeValid(slot, currentTime);
      }
      return true;
    });

    // Filter evening slots based on current time if selected date is today
    const filteredEveningSlots = eveningSlots.filter(slot => {
      if (isSameDay(selectedDate, currentTime)) {
        return isTimeValid(slot, currentTime);
      }
      return true;
    });

    return [...filteredMorningSlots, ...filteredEveningSlots];
  };

  // Helper function to check if two dates are on the same day
  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  // Helper function to validate if a time slot is valid for the current day
  const isTimeValid = (slot, currentTime) => {
    const [time, period] = slot.split(' ');
    let [hours, minutes] = time.split(':').map(Number);

    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;

    const slotTime = new Date(currentTime);
    slotTime.setHours(hours, minutes, 0, 0);

    return slotTime > currentTime;
  };

  const validationSchema = Yup.object().shape({
    treatment: Yup.string().required('Treatment is required'),
    appointmentDate: Yup.date()
      .required('Date is required')
      .min(new Date(), 'Date cannot be in the past')
      .test('not-closed-day', 'Clinic is closed on this day', function(value) {
        const day = value.getDay();
        return day !== 3 && day !== 4; // Not Wednesday or Thursday
      }),
    appointmentTime: Yup.string().required('Time is required'),
    name: Yup.string().required('Name is required'),
    phone: Yup.string(),
    email: Yup.string().email('Invalid email'),
    address: Yup.string().required('Address is required'),
    message: Yup.string(),
  }).test('phoneOrEmail', null, function(values) {
    if (!values.phone && !values.email) {
      return this.createError({
        message: 'Either phone or email is required',
        path: 'phone'
      });
    }
    return true;
  });

  const initialValues = {
    treatment: '',
    appointmentDate: null,
    appointmentTime: '',
    name: '',
    phone: '',
    email: '',
    address: '',
    message: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Comment out the submission logic for now
    console.log(values);
    setSubmitting(false);
    onClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      className="appointment-dialog"
    >
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Book an Appointment</Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            setFieldValue,
            isSubmitting
          }) => {
            const timeSlots = useMemo(() => 
              generateTimeSlots(values.appointmentDate), 
              [values.appointmentDate]
            );

            return (
              <Form>
                <Box mb={2}>
                  <TextField
                    select
                    fullWidth
                    name="treatment"
                    label="Select Treatment"
                    value={values.treatment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.treatment && Boolean(errors.treatment)}
                    helperText={touched.treatment && errors.treatment}
                  >
                    {treatments.map((treatment) => (
                      <MenuItem key={treatment} value={treatment}>
                        {treatment}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>

                <Box mb={2} display="flex" gap={2}>
                  <Box flex={1}>
                    <DatePicker
                      selected={values.appointmentDate}
                      onChange={(date) => {
                        setFieldValue('appointmentDate', date);
                        setFieldValue('appointmentTime', ''); // Reset time when date changes
                      }}
                      minDate={new Date()}
                      dateFormat="MMMM d, yyyy"
                      className="date-picker"
                      placeholderText="Select Date"
                    />
                    {touched.appointmentDate && errors.appointmentDate && (
                      <FormHelperText error>{errors.appointmentDate}</FormHelperText>
                    )}
                  </Box>
                  <Box flex={1}>
                    <TextField
                      select
                      fullWidth
                      name="appointmentTime"
                      label="Select Time"
                      value={values.appointmentTime}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.appointmentTime && Boolean(errors.appointmentTime)}
                      helperText={touched.appointmentTime && errors.appointmentTime}
                      disabled={!values.appointmentDate}
                    >
                      {timeSlots.length > 0 ? (
                        timeSlots.map((time) => (
                          <MenuItem key={time} value={time}>
                            {time}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem disabled>No available slots</MenuItem>
                      )}
                    </TextField>
                  </Box>
                </Box>

                <Box mb={2}>
                  <TextField
                    fullWidth
                    name="name"
                    label="Name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                  />
                </Box>

                <Box mb={2}>
                  <PhoneInput
                    country={'in'}
                    value={values.phone}
                    onChange={(phone) => setFieldValue('phone', phone)}
                    inputClass={touched.phone && errors.phone ? 'error' : ''}
                  />
                  {touched.phone && errors.phone && (
                    <FormHelperText error>{errors.phone}</FormHelperText>
                  )}
                </Box>

                <Box mb={2}>
                  <TextField
                    fullWidth
                    name="email"
                    label="Email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Box>

                <Box mb={2}>
                  <TextField
                    fullWidth
                    name="address"
                    label="Address"
                    multiline
                    rows={2}
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.address && Boolean(errors.address)}
                    helperText={touched.address && errors.address}
                  />
                </Box>

                <Box mb={2}>
                  <TextField
                    fullWidth
                    name="message"
                    label="Message/Requirements"
                    multiline
                    rows={3}
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.message && Boolean(errors.message)}
                    helperText={touched.message && errors.message}
                  />
                </Box>

                <Box mb={2}>
                  {/* reCAPTCHA placeholder */}
                  <div className="recaptcha-placeholder">
                    reCAPTCHA will be implemented here
                  </div>
                </Box>

                <Box display="flex" justifyContent="flex-end">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </Box>
              </Form>
            );
          }}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentForm;
