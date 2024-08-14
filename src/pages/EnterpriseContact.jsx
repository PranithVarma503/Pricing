import React, { useState } from 'react';

const EnterpriseContact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        jobTitle: '',
        country: '',
        city: '',
        companySize: '',
        industry: '',
        phoneNumber: '',
        receiveUpdates: 'no'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
    };

    const styles = {
        body: {
            fontFamily: 'Arial, sans-serif',
            margin: 0,
            padding: 0,
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
        },
        formContainer: {
            maxWidth: '500px',  // Increased width of the form container
            width: '100%',
            margin: '20px',
            padding: '40px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
        },
        h1: {
            fontSize: '28px',  // Adjusted font size
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#111827',
        },
        p: {
            fontSize: '16px',
            marginBottom: '20px',
            color: '#6B7280',
        },
        formGroup: {
            marginBottom: '20px',
            textAlign: 'left',
        },
        label: {
            display: 'block',
            fontSize: '14px',
            marginBottom: '5px',
            color: '#374151',
        },
        input: {
            width: '100%',
            padding: '10px',
            fontSize: '14px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            color: '#4B5563',
            backgroundColor: '#F9FAFB',
        },
        select: {
            width: '100%',
            padding: '10px',
            fontSize: '14px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            color: '#4B5563',
            backgroundColor: '#F9FAFB',
        },
        submitBtn: {
            backgroundColor: '#00ADEF',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
            width: '100%',
            textAlign: 'center',
            marginTop: '10px',
        },
    };

    return (
        <div style={styles.body}>
            <div style={styles.formContainer}>
                <h1 style={styles.h1}>CloudPano can help your Enterprise grow</h1>
                <p style={styles.p}>
                    Find out how CloudPano's secure, scalable 3D modeling platform can deliver simpler management, faster collaboration, and enhanced productivity to your Enterprise. Talk to our reps today!
                </p>
                <form onSubmit={handleSubmit}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>First Name *</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Last Name *</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Business Email *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Company *</label>
                        <input type="text" name="company" value={formData.company} onChange={handleChange} required style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Job Title *</label>
                        <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Country</label>
                        <input type="text" name="country" value={formData.country} onChange={handleChange} style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>City *</label>
                        <input type="text" name="city" value={formData.city} onChange={handleChange} required style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Company Size *</label>
                        <select name="companySize" value={formData.companySize} onChange={handleChange} required style={styles.select}>
                            <option value="">Select...</option>
                            <option value="1-10">1-10</option>
                            <option value="11-50">11-50</option>
                            <option value="51-200">51-200</option>
                            <option value="201-500">201-500</option>
                            <option value="501-1000">501-1000</option>
                            <option value="1001+">1001+</option>
                        </select>
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Industry *</label>
                        <select name="industry" value={formData.industry} onChange={handleChange} required style={styles.select}>
                            <option value="">Select...</option>
                            <option value="Construction">Construction</option>
                            <option value="Real Estate">Real Estate</option>
                            <option value="Insurance">Insurance</option>
                            <option value="Hospitality">Hospitality</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Phone Number</label>
                        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} style={styles.input} />
                    </div>
                    <button type="submit" style={styles.submitBtn}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default EnterpriseContact;
