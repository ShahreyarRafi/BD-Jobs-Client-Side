import React from 'react';
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';

const PDFDocument = ({ filteredJobs }) => {
    const styles = StyleSheet.create({
        page: {
            padding: 20,
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 10,
        },
        table: {
            width: '100%',
            border: '1px solid #ccc',
            marginBottom: 20,
        },
        tableHeader: {
            backgroundColor: '#f2f2f2',
            fontWeight: 'bold',
            padding: 5,
        },
        tableData: {
            padding: 5,
        },
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.title}>Applied Jobs</Text>

                <View style={styles.table}>
                    <View style={styles.tableHeader} >
                        <Text>Company Name</Text>
                        <Text>Job Title</Text>
                        <Text>Job Category</Text>
                        <Text>Job Type</Text>
                        <Text>Salary Range</Text>
                        <Text>Application Email</Text>
                        <Text>Resume</Text>
                    </View>

                    {filteredJobs.map((job) => (
                        <View key={job._id} style={styles.tableData}>
                            <Text>{job.company_name}</Text>
                            <Text>{job.job_title}</Text>
                            <Text>{job.job_category}</Text>
                            <Text>{job.job_type}</Text>
                            <Text>{job.salary_range}</Text>
                            <Text>{job.applicant_email}</Text>
                            <Text>{job.resume}</Text>
                        </View>
                    ))}
                </View>
            </Page>
        </Document>
    );
};

export default PDFDocument;
