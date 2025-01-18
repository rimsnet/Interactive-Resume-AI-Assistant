'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Brain,
  Briefcase,
  GraduationCap,
  Plus,
  Save,
  Trash2,
  Layout,
} from 'lucide-react';
import { skillsData, experienceData, researchData, projectsData } from '@/lib/data';

export default function Dashboard() {
  const [skills, setSkills] = useState(skillsData);
  const [experiences, setExperiences] = useState(experienceData);
  const [research, setResearch] = useState(researchData);
  const [projects, setProjects] = useState(projectsData);

  const addSkill = () => {
    setSkills([...skills, { name: '', level: 0, category: '' }]);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      { title: '', company: '', period: '', description: '', achievements: [], logo: '', workplaceImg: '' },
    ]);
  };

  const addResearch = () => {
    setResearch([
      ...research,
      { title: '', publication: '', year: '', impact: '', description: '' },
    ]);
  };

  const addProject = () => {
    setProjects([
      ...projects,
      {
        title: '',
        description: '',
        image: '',
        technologies: [],
        demoUrl: '',
        githubUrl: '',
        featured: false,
        company: ''
      },
    ]);
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold">Dashboard</h1>

        {/* Skills Section */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Skills
            </CardTitle>
            <Button onClick={addSkill} variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Skill
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-4">
                <Input
                  value={skill.name}
                  onChange={(e) => {
                    const newSkills = [...skills];
                    newSkills[index].name = e.target.value;
                    setSkills(newSkills);
                  }}
                  placeholder="Skill name"
                />
                <Input
                  value={skill.category}
                  onChange={(e) => {
                    const newSkills = [...skills];
                    newSkills[index].category = e.target.value;
                    setSkills(newSkills);
                  }}
                  placeholder="Category"
                />
                <Input
                  type="number"
                  value={skill.level}
                  onChange={(e) => {
                    const newSkills = [...skills];
                    newSkills[index].level = parseInt(e.target.value);
                    setSkills(newSkills);
                  }}
                  placeholder="Level (0-100)"
                  className="w-32"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => {
                    setSkills(skills.filter((_, i) => i !== index));
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Projects Section */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Layout className="h-5 w-5" />
              Projects
            </CardTitle>
            <Button onClick={addProject} variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Project
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="space-y-4 p-4 border rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    value={project.title}
                    onChange={(e) => {
                      const newProjects = [...projects];
                      newProjects[index].title = e.target.value;
                      setProjects(newProjects);
                    }}
                    placeholder="Project Title"
                  />
                  <Input
                    value={project.image}
                    onChange={(e) => {
                      const newProjects = [...projects];
                      newProjects[index].image = e.target.value;
                      setProjects(newProjects);
                    }}
                    placeholder="Image URL"
                  />
                </div>
                <Textarea
                  value={project.description}
                  onChange={(e) => {
                    const newProjects = [...projects];
                    newProjects[index].description = e.target.value;
                    setProjects(newProjects);
                  }}
                  placeholder="Description"
                />
                <Input
                  value={project.technologies.join(', ')}
                  onChange={(e) => {
                    const newProjects = [...projects];
                    newProjects[index].technologies = e.target.value.split(',').map(t => t.trim());
                    setProjects(newProjects);
                  }}
                  placeholder="Technologies (comma-separated)"
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    value={project.demoUrl}
                    onChange={(e) => {
                      const newProjects = [...projects];
                      newProjects[index].demoUrl = e.target.value;
                      setProjects(newProjects);
                    }}
                    placeholder="Demo URL"
                  />
                  <Input
                    value={project.githubUrl}
                    onChange={(e) => {
                      const newProjects = [...projects];
                      newProjects[index].githubUrl = e.target.value;
                      setProjects(newProjects);
                    }}
                    placeholder="GitHub URL"
                  />
                </div>
                <Button
                  variant="destructive"
                  onClick={() => {
                    setProjects(projects.filter((_, i) => i !== index));
                  }}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Remove
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Experience Section */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Experience
            </CardTitle>
            <Button onClick={addExperience} variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Experience
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="space-y-4 p-4 border rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    value={exp.title}
                    onChange={(e) => {
                      const newExp = [...experiences];
                      newExp[index].title = e.target.value;
                      setExperiences(newExp);
                    }}
                    placeholder="Job Title"
                  />
                  <Input
                    value={exp.company}
                    onChange={(e) => {
                      const newExp = [...experiences];
                      newExp[index].company = e.target.value;
                      setExperiences(newExp);
                    }}
                    placeholder="Company"
                  />
                </div>
                <Input
                  value={exp.period}
                  onChange={(e) => {
                    const newExp = [...experiences];
                    newExp[index].period = e.target.value;
                    setExperiences(newExp);
                  }}
                  placeholder="Period"
                />
                <Textarea
                  value={exp.description}
                  onChange={(e) => {
                    const newExp = [...experiences];
                    newExp[index].description = e.target.value;
                    setExperiences(newExp);
                  }}
                  placeholder="Description"
                />
                <Button
                  variant="destructive"
                  onClick={() => {
                    setExperiences(experiences.filter((_, i) => i !== index));
                  }}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Remove
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Research Section */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Research
            </CardTitle>
            <Button onClick={addResearch} variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Research
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            {research.map((item, index) => (
              <div key={index} className="space-y-4 p-4 border rounded-lg">
                <Input
                  value={item.title}
                  onChange={(e) => {
                    const newResearch = [...research];
                    newResearch[index].title = e.target.value;
                    setResearch(newResearch);
                  }}
                  placeholder="Research Title"
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    value={item.publication}
                    onChange={(e) => {
                      const newResearch = [...research];
                      newResearch[index].publication = e.target.value;
                      setResearch(newResearch);
                    }}
                    placeholder="Publication"
                  />
                  <Input
                    value={item.year}
                    onChange={(e) => {
                      const newResearch = [...research];
                      newResearch[index].year = e.target.value;
                      setResearch(newResearch);
                    }}
                    placeholder="Year"
                  />
                </div>
                <Textarea
                  value={item.description}
                  onChange={(e) => {
                    const newResearch = [...research];
                    newResearch[index].description = e.target.value;
                    setResearch(newResearch);
                  }}
                  placeholder="Description"
                />
                <Button
                  variant="destructive"
                  onClick={() => {
                    setResearch(research.filter((_, i) => i !== index));
                  }}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Remove
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Save Changes Button */}
        <div className="flex justify-end">
          <Button size="lg" className="gap-2">
            <Save className="h-4 w-4" />
            Save All Changes
          </Button>
        </div>
      </div>
    </div>
  );
}