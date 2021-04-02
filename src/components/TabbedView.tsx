import styled from "styled-components";
import { ReactNode, useState } from "react";
import { Colors } from "../styles";

interface TabbedNewsProps {
  tabs: Array<{
    tabLabel: String;
    renderTab: () => ReactNode;
  }>;
}

const TabWrapper = styled.div`
  background-color: ${Colors.backgroundSecondary};
  padding: 2px;
`;

const TabContents = styled.div`
  background-color: ${Colors.backgroundPrimary};
`;

const TabHeaders = styled.div`
  display: flex;
`;

const TabHeader = styled.h2`
  margin: 0;
  padding: 5px 0 5px;
  text-align: center;
  cursor: pointer;
  flex: 1;
  max-width: 300px;
  height: 30px;
  font-size: 20px;
  background-color: ${Colors.backgroundSecondary};
`;

const SelectedTabHeader = styled(TabHeader)`
  font-weight: bolder;
  background-color: ${Colors.backgroundPrimary};
`;

export const TabbedView = ({ tabs }: TabbedNewsProps) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  return (
    <TabWrapper>
      <TabHeaders>
        {tabs.map((config, index) => {
          if (index === selectedTabIndex)
            return (
              <SelectedTabHeader key={`tab_${index}`}>
                {config.tabLabel}
              </SelectedTabHeader>
            );
          else
            return (
              <TabHeader
                key={`tab_${index}`}
                onClick={() => setSelectedTabIndex(index)}
              >
                {config.tabLabel}
              </TabHeader>
            );
        })}
      </TabHeaders>
      <TabContents>{tabs[selectedTabIndex].renderTab()}</TabContents>
    </TabWrapper>
  );
};
