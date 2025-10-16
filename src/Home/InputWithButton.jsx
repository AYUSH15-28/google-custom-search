
import React, { useState } from 'react';
import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import { ActionIcon, TextInput, useMantineTheme } from '@mantine/core';
import ActionToggle from '../ThemeChanger/ActionToggle';
import { useNavigate } from "react-router-dom";

export default function GoogleStyleSearch() {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/header?search=${encodeURIComponent(searchTerm)}`);
    } else {
      navigate("/header");
    }
  };

  return (
    <>
      <ActionToggle className="fixed top-5 right-5" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '80px',
        }}
      >
        <h1
          style={{
            fontSize: '92px',
            fontWeight: 'bold',
            letterSpacing: '-2px',
            marginBottom: '30px',
          }}
        >
          Google
        </h1>

        <form onSubmit={handleSubmit}>
          <TextInput
            radius="xl"
            size="md"
            placeholder="Search questions"
            style={{ width: '570px' }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            rightSectionWidth={42}
            leftSection={<IconSearch size={18} stroke={1.5} />}
            rightSection={
              <ActionIcon
                size={32}
                radius="xl"
                color={theme.primaryColor}
                variant="filled"
                type="submit"
              >
                <IconArrowRight size={18} stroke={1.5} />
              </ActionIcon>
            }
          />
        </form>
      </div>
    </>
  );
}


