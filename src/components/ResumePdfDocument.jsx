import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
  family: 'Helvetica'
});

const styles = StyleSheet.create({
  page: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 22,
    fontFamily: 'Helvetica',
    fontSize: 9,
    lineHeight: 1.25
  },
  header: {
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#cbd5e1',
    paddingBottom: 4
  },
  name: {
    fontSize: 14,
    fontWeight: 700
  },
  sectionTitle: {
    marginTop: 5,
    marginBottom: 2,
    fontSize: 9,
    fontWeight: 700,
    textTransform: 'uppercase'
  },
  paragraph: {
    marginBottom: 2
  },
  line: {
    marginBottom: 2
  },
  heading: {
    fontWeight: 700,
    marginBottom: 1
  },
  bullet: {
    marginLeft: 8,
    marginBottom: 1
  }
});

export default function ResumePdfDocument({ content, selectedSummary, selectedProjects, selectedSkillCategories }) {
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header}>
          <Text style={styles.name}>{content.profile.name}</Text>
          <Text>
            {content.profile.location} | {content.profile.phone} | {content.profile.email}
          </Text>
          <Text>{content.profile.links.map((x) => `${x.label}: ${x.url}`).join(' | ')}</Text>
        </View>

        <Text style={styles.sectionTitle}>Summary</Text>
        <Text style={styles.paragraph}>{content.summaries[selectedSummary]}</Text>

        <Text style={styles.sectionTitle}>Education</Text>
        {content.education.map((edu) => (
          <View key={edu.school} style={styles.line}>
            <Text style={styles.heading}>{edu.degree}</Text>
            <Text>
              {edu.school} - {edu.location}
            </Text>
            <Text>{edu.dates}</Text>
            {edu.courses?.length ? <Text>Courses: {edu.courses.join(', ')}</Text> : null}
          </View>
        ))}

        <Text style={styles.sectionTitle}>Skills</Text>
        {selectedSkillCategories.map((category) => (
          <Text key={category} style={styles.line}>
            {category}: {content.skills[category].join(', ')}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>Projects</Text>
        {selectedProjects.map((project) => (
          <View key={project.id} style={styles.line} wrap={false}>
            <Text style={styles.heading}>{project.title}</Text>
            {project.highlights.map((highlight) => (
              <Text key={highlight} style={styles.bullet}>
                - {highlight}
              </Text>
            ))}
          </View>
        ))}

        <Text style={styles.sectionTitle}>Professional Experience</Text>
        {content.professionalExperience.map((job) => (
          <View key={`${job.company}-${job.role}`} style={styles.line} wrap={false}>
            <Text style={styles.heading}>
              {job.role} - {job.company} ({job.dates})
            </Text>
            {job.bullets.map((bullet) => (
              <Text key={bullet} style={styles.bullet}>
                - {bullet}
              </Text>
            ))}
          </View>
        ))}
      </Page>
    </Document>
  );
}
