import React, { useState } from 'react';
import './Enterprise.css';

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

    return (
        <div className="form-container">
            <h1>CloudPano  can help your Enterprise grow</h1>
            <p>
                Find out how CloudPano's secure, scalable 3D modeling platform can deliver simpler management, faster collaboration, and enhanced productivity to your Enterprise. Talk to our reps today!
            </p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name *</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Last Name *</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Business Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Company *</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Job Title *</label>
                    <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Country</label>
                    <input type="text" name="country" value={formData.country} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>City *</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Company Size *</label>
                    <select name="companySize" value={formData.companySize} onChange={handleChange} required>
                        <option value="">Select...</option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="201-500">201-500</option>
                        <option value="501-1000">501-1000</option>
                        <option value="1001+">1001+</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Industry *</label>
                    <select name="industry" value={formData.industry} onChange={handleChange} required>
                        <option value="">Select...</option>
                        <option value="Construction">Construction</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Insurance">Insurance</option>
                        <option value="Hospitality">Hospitality</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>
                        I agree to receive news, product updates, event information, and special offers from Matterport. I understand my personal data will be processed in accordance with Matterport's Privacy Policy and agree to the Terms of Use.
                    </label>
                    <div>
                        <label>
                            <input type="radio" name="receiveUpdates" value="yes" checked={formData.receiveUpdates === 'yes'} onChange={handleChange} />
                            Yes
                        </label>
                        <label>
                            <input type="radio" name="receiveUpdates" value="no" checked={formData.receiveUpdates === 'no'} onChange={handleChange} />
                            No
                        </label>
                    </div>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default EnterpriseContact;
